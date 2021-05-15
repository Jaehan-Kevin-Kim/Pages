import React, { useCallback, useRef, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import useInput from "../hooks/useinput";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);

  const imageInput = useRef();
  const dispatch = useDispatch();
  // const [text, onChangeText] = useInput("");
  const [text, setText] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);

  return (
    <Form style={{ margin: "10px 0 20px" }} encType='multipart/form-data' onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='Do you have anything to share?'
      />
      <div>
        <input type='file' multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Image Upload</Button>
        <Button type='primary' style={{ float: "right" }} htmlType='submit'>
          Tweet!
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img src={v} style={{ width: "200px" }} alt={v} />
              <div>
                <Button>Remove</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
