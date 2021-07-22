import React from "react";

import Gear from '../__gear';
import Ask from '../__ask';
import { RowHeader1 } from '../__row';
import { RowHeader2 } from '../__row';
import { RowHeader3 } from '../__row';
import { CellCol1, CellHeader } from '../__cell';
import { CellCol2 } from '../__cell';
import { CellCol3 } from '../__cell';
import { CellCol4 } from '../__cell';
import { CellContainer } from '../__cell';
import { CellSubheader } from "../__cell";


import "./app.sass";

class App extends React.Component {
    
    render() {
        return(
            <table className="table">
                <RowHeader1 />
                <RowHeader2>
                    <th className="table__cell table__cell_col-1">Название</th>
                    <th className="table__cell table__cell_col-2">
                        <th className="table__cell table__cell_subcol-1">
                            <div>Показы</div>
                            <span className="material-icons">help_outline</span>
                        </th>
                        <th className="table__cell table__cell_subcol-2">Клики</th>
                        <th className="table__cell table__cell_subcol-3">
                            <div>Сеансы</div>
                            <span className="material-icons">
                                arrow_downward
                            </span>
                        </th>
                        <th className="table__cell table__cell_subcol-4">
                            <div>CTR, %</div>
                            <span className="material-icons">help_outline</span>
                        </th>
                        <th className="table__cell table__cell_subcol-5">Цена клика</th>
                        <th className="table__cell table__cell_subcol-6">
                            <div>Затраты</div>
                            <div>
                                <a>Настроить
                                    <span className="material-icons">help_outline</span>
                                </a>
                            </div>
                        </th>
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
                </RowHeader2>
                <RowHeader3>
                    <th className="table__cell table__cell_col-1">Итого</th>
                    <td className="table__cell table__cell_col-2">
                        <td className="table__cell table__cell_data table__cell_subcol-1">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-2">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-3">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-4">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-5">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-6">0</td>
                    </td>
                    <td className="table__cell table__cell_col-3">
                        <td className="table__cell table__cell_data table__cell_subcol-7">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-8">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-9">0</td>
                    </td>
                    <td className="table__cell table__cell_col-4">
                        <td className="table__cell table__cell_data table__cell_subcol-10">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-11">0</td>
                        <td className="table__cell table__cell_data table__cell_subcol-12">0</td>
                    </td>
                </RowHeader3>
            </table>
        );
    }
}

export default App;