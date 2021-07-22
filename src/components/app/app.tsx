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
                <RowHeader1>
                    <CellCol1 />
                    <CellCol2>
                        Трафик
                        <Gear />
                        <Ask />
                    </CellCol2>
                    <CellCol3>
                        <CellContainer>
                            <CellHeader srcImg='crm.png' text='Продажи' />
                            <CellSubheader srcImg='model_linear.png' text='Линейная модель' />
                        </CellContainer>
                        <Gear />
                        <Ask />
                    </CellCol3>
                    <CellCol4>
                        <div className="th-content">
                            <div className="th-content__header th-content__header_sales">
                                <img className="th-content__ga" src="composite.png"/>
                                <div className="th-content__text">Цель с осн. GA</div>
                            </div>
                            <div className="th-content__subheader th-content__subheader_model">
                                <img className="th-content__composite" src="composite (1).png"/>
                                <div className="th-content__text">Составная цель</div>
                            </div>
                        </div>
                        <span className="material-icons gear">
                            settings
                        </span>
                        <span className="material-icons ask">
                            help
                        </span>
                    </CellCol4>
                </ RowHeader1>
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