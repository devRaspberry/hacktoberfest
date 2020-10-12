import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

class MarkdownViewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
       content: null,
       urlGitHubFile: "https://raw.githubusercontent.com/devRaspberry/hacktoberfest/main/contributors-list.md"
    };
  }

  componentDidMount() {
    axios.get(this.state.urlGitHubFile)
    .then(res => {
       console.log(res);
       this.setState({ content: res.data })
    })
    .catch(e => { console.err(e) })
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <h1>Greetings contributors</h1>
	    <p>
    	    <ReactMarkdown source={content} />
	    </p>
      </div>
  )}
}

export default MarkdownViewer;