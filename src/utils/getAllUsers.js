import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api-test-buddy.glitch.me/api/users/all';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default myComponent;