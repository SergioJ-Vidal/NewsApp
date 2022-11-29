import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Form.scss';

export const Form = () => {

  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({

    name: "",

    title: "",

    body: "",

    image_url: "",

    publishDate: new Date()

  });

  const initialState = {
    name: "",

    title: "",

    body: "",

    image_url: "",

    publishDate: ""
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {

    if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setMessage(null);
      setBtnDisabled(false);
    } else if (data.body.length < 150) {
      setMessage("150 characteres needed for publish");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("New", JSON.stringify(data));
    clearState();
    setTimeout(() => {
      navigate('/list')
    }, 3000);
    setVisible(false)
  };


  return (
    <div>
      <div className="form-container">
        <h1>Create News</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={handleInputChange}
            name="name"
          />
          <br />
          <input
            type="string"
            placeholder="Title"
            value={data.title}
            onChange={handleInputChange}
            name="title"
          />
          <br />
          <input
            type="string"
            placeholder="Image Url"
            value={data.image_url}
            onChange={handleInputChange}
            name="title"
          />
          <br />
          <textarea
            type="text"
            placeholder="Write New"
            value={data.body}
            onChange={handleInputChange}
            cols="70"
            rows="8"
            name="new"
          />
          <button className="send-btn" type="submit" disabled={btnDisabled}>
            Send
          </button>
        </form>
        <p>{visible ? message : 'Redirecting to Home...'}</p>
      </div>
    </div>
  );
}

export default Form;