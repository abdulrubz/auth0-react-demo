import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    profile: null,
    error: "",
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }
  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <div>
        <h1>Profile</h1>
        <p>Welcome, {profile.given_name}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
          src={profile.picture}
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </div>
    );
  }
}