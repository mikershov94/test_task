import React from "react";
import "./app.sass";

class App extends React.Component {
    
    render() {
        return(
            <table className="table">
                <tr className="table__row table__row_header-1">
                    <th className="table__cell table__cell_col-1">Источники трафика</th>
                    <th className="table__cell table__cell_col-2">Трафик</th>
                    <th className="table__cell table__cell_col-3">Продажи</th>
                    <th className="table__cell table__cell_col-4">Цель с осн. GA</th>
                </tr>
                <tr className="table__row table__row_header-2">
                    <th className="table__cell table__cell_col-1">Название</th>
                    <th className="table__cell table__cell_col-2">
                        <th className="table__cell table__cell_subcol-1">Показы</th>
                        <th className="table__cell table__cell_subcol-2">Клики</th>
                        <th className="table__cell table__cell_subcol-3">Сеансы</th>
                        <th className="table__cell table__cell_subcol-4">CTR, %</th>
                        <th className="table__cell table__cell_subcol-5">Цена клика</th>
                        <th className="table__cell table__cell_subcol-6">Затраты</th>
                    </th>
                    <th className="table__cell table__cell_col-3">
                        <th className="table__cell table__cell_subcol-7">Кол-во</th>
                        <th className="table__cell table__cell_subcol-8">CPA</th>
                        <th className="table__cell table__cell_subcol-9">Выручка</th>
                    </th>
                    <th className="table__cell table__cell_col-4">
                        <th className="table__cell table__cell_subcol-10">Кол-во</th>
                        <th className="table__cell table__cell_subcol-11">CPA</th>
                        <th className="table__cell table__cell_subcol-12">CR, %</th>
                    </th>
                </tr>
                <tr className="table__row table__row_header-3">
                    <th className="table__cell table__cell_col-1">Итого</th>
                    <td className="table__cell table__cell_col-2">0Ы</td>
                    <td className="table__cell table__cell_col-3">0</td>
                    <td className="table__cell table__cell_col-4">0</td>
                </tr>
            </table>
        );
    }
}

export default App;