import React, { useEffect, useState } from "react";
import "./AddPost.css";
import db, { storage, auth } from "./firebase";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

import { actionTypes } from "./reducer";

function AddPost() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [sermon, setSermon] = useState("");
  const [defaultValue, setDefaultvalue] = useState("");
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
    console.log(author);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSermon = (e) => {
    setSermon(e.target.value);
    console.log(sermon);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (author && sermon) {
      async function postData() {
        const posts = await axios.post("/api/v1/sermon", {
          author: author,
          message: sermon,
          title: title,
        });
      }

      postData();
    }

    setAuthor("");
    setTitle("");
    setSermon("");
  };

  //Gallery logic
  const [file, setFile] = useState("");
  const [prog, setProg] = useState(0);

  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryDate, setGalleryDate] = useState("");

  const handleGalleryTitle = (e) => {
    setGalleryTitle(e.target.value);
  };

  const handleGalleryDate = (e) => {
    setGalleryDate(e.target.value);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const storageRef = storage.ref(`images/${file.name}`);
    const uploadTask = storageRef.put(file);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProg(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        storageRef.getDownloadURL().then((url) => {
          async function postGallery() {
            const postData = await axios.post("/api/v1/gallery", {
              imageUrl: url,
              title: galleryTitle,
              date: galleryDate,
            });
          }

          postGallery();
        });
        setGalleryTitle("");
        setGalleryDate("");
        setProg(0);
        setFile(null);
      }
    );
  };

  //LocalStorage Login

  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem(JSON.stringify("login"))
  );

  //Login users

  const [user, setUser] = useState(null);
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword("dfmopeoluwa@gmail.com", "jumoke16")
      .then((user) => {
        console.log(user);
        setUser(user);
        localStorage.setItem(JSON.stringify("login"), JSON.stringify(true));
        setLoginStatus(localStorage.getItem(JSON.stringify("login")));
        console.log(loginStatus, "login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Login state changed

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        console.log(authUser);

        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //dispatch login status

  const [{ USER }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_USER,
      USER: loginStatus,
    });
  }, [loginStatus]);

  return (
    <div className="addPost">
      {loginStatus == "true" && (
        <>
          <h1 className="addPost__header">Upload Sermon</h1>
          <form>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                placeholder="Author name"
                value={author}
                onChange={handleAuthor}
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                placeholder="Sermon Title"
                value={title}
                onChange={handleTitle}
              />
            </div>

            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                onChange={handleSermon}
                value={sermon}
                placeholder="Enter text"
              />
            </div>

            <button class="btn btn-primary" onClick={handleClick}>
              Create Sermon
            </button>
          </form>
          <div className="addPost__gallery">
            <h1 className="addPost__header">Upload Picture</h1>
            <form>
              <div class="form-group">
                <progress
                  className="addPost__progressBar"
                  min="0"
                  value={prog}
                />
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Picture Summary"
                  value={galleryTitle}
                  onChange={handleGalleryTitle}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="date"
                  value={galleryDate}
                  onChange={handleGalleryDate}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control-file"
                  type="file"
                  name={(e) => file}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" onClick={handleUpload}>
                Upload
              </button>
            </form>
          </div>
        </>
      )}
      {loginStatus === "false" ? (
        <form>
          <button onClick={handleLogin}>Login</button>
        </form>
      ) : (
        <form>
          <button
            className="btn btn-danger addPost__logoutButton"
            onClick={(e) => {
              e.preventDefault();
              auth.signOut().then((user) => {
                localStorage.setItem(
                  JSON.stringify("login"),
                  JSON.stringify(false)
                );
                setLoginStatus(localStorage.getItem(JSON.stringify("login")));
              });
            }}
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
}

export default AddPost;
