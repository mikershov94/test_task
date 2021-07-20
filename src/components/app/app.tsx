import React from "react";
import "./app.sass";

class App extends React.Component {
    
    render() {
        return(
            <table className="table">
                <tr className="table__row table__row_header-1">
                    <th className="table__header table__header_column-1">Источники трафика</th>
                    <th className="table__header table__header_column-2">Трафик</th>
                    <th className="table__header table__header_column-3">Продажи</th>
                    <th className="table__header table__header_column-4">Цель с осн. GA</th>
                </tr>
                <tr className="table__row table__row_header-2">
                    <th className="table__header">Название</th>
                    <th className="table__header">...</th>
                    <th className="table__header">...</th>
                    <th className="table__header">...</th>
                </tr>
                <tr className="table__row table__row_header-3">
                    <th className="table__header">Итого</th>
                    <td className="table__data">0Ы</td>
                    <td className="table__data">0</td>
                    <td className="table__data">0</td>
                </tr>
            </table>
        );
    }
}

export default App;