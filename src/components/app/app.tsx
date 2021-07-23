import React from "react";

import { RowHeader1 } from '../__row';
import { RowHeader2 } from '../__row';
import { RowHeader3 } from '../__row';


import "./app.sass";

class App extends React.Component {
    
    render() {
        return(
            <table className="table">
                <RowHeader1 />
                <RowHeader2 />
                <RowHeader3 />
            </table>
        );
    }
}

export default App;