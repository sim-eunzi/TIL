class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      searchKeyword: ''
    }
  }

  handleChangeInput(event) {
    this.setState({
      searchKeyword: event.target.value
    })

    // this.state.searchKeyword = event.target.value
    // this.forceUpdate()
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container"> 검색 </h2>
        </header>
        <div className="container">
          <form>
            <input 
              value={this.state.searchKeyword} 
              type="text" 
              placeholder="검색어를 입력하세요" 
              autoFocus 
              onChange={e => this.handleChangeInput(e)}
            />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))