import React, { PureComponent } from "react";
import Header from "./Emoji/Header";
import SearchInput from "./Emoji/SearchInput";
import EmojiResults from "./Emoji/EmojiResults";
import filterEmoji from "./Emoji/filterEmoji";

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
export default Search;
