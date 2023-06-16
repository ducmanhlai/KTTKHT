import React, { useState } from "react";

import { Button } from "react-bootstrap";

const MyComponent = () => {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState("Xiao Ming Xian Sheng");
  const [editContent, setEditContent] = useState("");

  const handleEditClick = () => {
    setEditContent(content);
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
    // Xử lý logic lưu nội dung đã chỉnh sửa
  };

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="rule-page mt-28">
      <div>
        {editable ? (
          <input
            type="text"
            value={editContent}
            onChange={handleInputChange}
            autoFocus
          />
        ) : (
          <p>{content}</p>
        )}
      </div>
      {editable ? (
        <Button variant="secondary" onClick={handleSaveClick}>
          Lưu
        </Button>
      ) : (
        <Button
          variant="primary"
          className="cursor-pointer"
          onClick={handleEditClick}
        >
          Chỉnh sửa
        </Button>
      )}
    </div>
  );
};

export default MyComponent;
