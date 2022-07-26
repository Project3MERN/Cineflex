import React from "react";
import "../css/dashboard.css";
import CreatePost from "../components/CreatePost";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <div className="dashbanner">
        <h1>Welcome (Enter Username)</h1>
      </div>
      <h1>Find A Movie!</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Row>
          <Col xs={12} md={8}>
            <Form.Control
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              size="lg"
              placeholder="Search For A Movie"
            />
          </Col>
          <Col xs={12} md={4}>
            <Button type="submit" variant="success" size="lg">
              Submit Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <div className="saved-movies">
        <h2>Your Saved Movies</h2>
        <div className="card">
          <div className="card_body">
            <img className="card_image" src="" />
            <h2 className="card_title"></h2>
            <p className="card_body"></p>
          </div>
          <button className="card_btn">Delete Movie</button>
        </div>
        <div className="card">
          <div className="card_body">
            <img className="card_image" src="" />
            <h2 className="card_title"></h2>
            <p className="card_body"></p>
          </div>
          <button className="card_btn">Delete Movie</button>
        </div>
        <div className="card">
          <div className="card_body">
            <img className="card_image" src="" />
            <h2 className="card_title"></h2>
            <p className="card_body"></p>
          </div>
          <button className="card_btn">Delete Movie</button>
        </div>
      </div>
      <div className="your-reviews">
        <h2>Your Reviews</h2>
        <div className="card">
          <div className="card_body">
            <img className="card_image" src="" />
            <h2 className="card_title"></h2>
            <p className="card_body"></p>
          </div>
          <button className="card_btn">Edit Review</button>
        </div>
        <div className="card">
          <div className="card_body">
            <img className="card_image" src="" />
            <h2 className="card_title"></h2>
            <p className="card_body"></p>
          </div>
          <button className="card_btn">Edit Review</button>
        </div>
        <div className="card">
          <div className="card_body">
            <img className="card_image" src="" />
            <h2 className="card_title"></h2>
            <p className="card_body"></p>
          </div>
          <button className="card_btn">Edit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
