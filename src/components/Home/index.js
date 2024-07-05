import { Component } from "react";
import "./index.css"
import {Content,Cell, Column, Row, TableView, TableBody, TableHeader,Provider, defaultTheme} from '@adobe/react-spectrum'



class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Content>Airports</Content>
                <Provider theme={defaultTheme}>
                <TableView
                    aria-label="Example table with static contents"
                    selectionMode="multiple"
                >
                <TableHeader>
                    <Column>Name</Column>
                    <Column>Country</Column>
                    <Column>Code</Column>
                    <Column align="end">Terminals</Column>
                </TableHeader>
                    <TableBody>
                        <Row>
                            <Cell>Indira Gandhi International Airport</Cell>
                            <Cell>India</Cell>
                            <Cell>DEL</Cell>
                            <Cell>3</Cell>
                        </Row>
                        <Row>
                            <Cell>Dubai International Airport</Cell>
                            <Cell>UAE</Cell>
                            <Cell>DXB</Cell>
                            <Cell>5</Cell>
                        </Row>
                        <Row>
                            <Cell>Heathrow Airport</Cell>
                            <Cell>England</Cell>
                            <Cell>LHR</Cell>
                            <Cell>6</Cell>
                        </Row>
                        <Row>
                            <Cell>Istanbul Airport</Cell>
                            <Cell>Turkey</Cell>
                            <Cell>IST</Cell>
                            <Cell>3</Cell>
                        </Row>
                        <Row>
                            <Cell>Rajiv Gandhi International Airport</Cell>
                            <Cell>USA</Cell>
                            <Cell>DFW</Cell>
                            <Cell>14</Cell>
                        </Row>
                    </TableBody>
                    </TableView>

                </Provider>
            </div>
        )
    }
}

export default Home
