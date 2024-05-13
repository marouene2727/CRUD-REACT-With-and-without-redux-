import  { Component } from 'react';

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMessage: true
        };
    }

    componentDidMount() {
        // Après 3 secondes, définir showMessage à false
        this.timeoutId = setTimeout(() => {
            this.setState({ showMessage: false });
        }, 3000);
    }

    componentWillUnmount() {
        // Nettoyer le timeout si le composant est démonté
        clearTimeout(this.timeoutId);
    }

    render() {
        const { showMessage } = this.state;

        return (
            <div>
                <h1>Page non trouvée</h1>
                {showMessage && <p>Redirection vers la page des films...</p>}
            </div>
        );
    }
}

export default NotFound;