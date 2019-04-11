import React, {Component} from 'react';
import StarComponentLogo from './StarComponentLogo';
import StarComponentSortBar from './StarComponentSortBar';

class StarContainer extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
          data: [],
          isLoading: false,
          error: null,
        };

        this.handleClick = this.handleClick.bind(this);

      }

      handleClick(event) {

        switch (event.target.id) {
            case 'height':
            this.setState({data: this.state.data.sort((a,b) => Number(a.height) > Number(b.height) ? 1 : -1)});
            break;
            case 'mass':
            this.setState({data: this.state.data.sort((a,b) => Number(a.mass) > Number(b.mass) ? 1 : -1)});
            break;
            case 'film':
            this.setState({data: this.state.data.sort((a,b) => a.films.length > b.films.length ? 1 : -1)});
            break;
            case 'name':
            this.setState({data: this.state.data.sort((a,b) => a.name > b.name ? 1 : -1)});
            break;
            default:
            this.setState({data: this.state.data.sort((a,b) => a.name > b.name ? 1 : -1)});
        }
      }
    
      componentDidMount() {

        this.setState({ isLoading: true });
        
        fetch("https://swapi.co/api/people/")
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })    
          .then(result => this.setState({ data: result.results.sort((a,b)=>a.name>b.name), isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
      }

    render() {
        
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
          }
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        
        return (
        
            <div>
                <StarComponentLogo />
                <StarComponentSortBar onClick={this.handleClick}/>
    
                <div className='container'>
                    {this.state.data.map((a,) => 
                        
                        <div className='card' key={a.created}>
                            <h1>{a.name}</h1>
                            <ul>
                                <li>Height: {a.height}cm</li>
                                <li>Mass: {a.mass}kgs</li>
                                <li>Appears in {a.films.length} movies</li>
                            </ul>
                        </div>            
                    )}
                </div>
            </div>
        )
    }
}

export default StarContainer;