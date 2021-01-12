import React from 'react'
import { Collapse } from 'antd';
import Container from "../Container";

const Lesson = () => {
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    return (
        <Container>
            <Collapse onChange={callback} defaultActiveKey='1'>
                <Panel header="Բազմություններ և հարաբերություններ" key="1">
                    <Collapse>
                        <Panel header="Բազմության հասկացությունը" key="1">
                            <p>{text}</p>
                            <a href="/test">Անցնել թեստ</a>
                        </Panel>
                        <Panel header="Գործողություններ բազմությունների հետ" key="2">
                            <p>{text}</p>
                            <a href="/test">Անցնել թեստ</a>
                        </Panel>
                        <Panel header="Հարաբերություն" key="3">
                            <p>{text}</p>
                            <a href="/test">Անցնել թեստ</a>
                        </Panel>
                        <Panel header="Բազմության հասկացությունը" key="4">
                            <p>{text}</p>
                            <a href="/test">Անցնել թեստ</a>
                        </Panel>
                        <Panel header="Բազմության հասկացությունը" key="5">
                            <p>{text}</p>
                            <a href="/test">Անցնել թեստ</a>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="Գլուխ 2" key="2">
                    <p>{text}</p>
                    <a href="/test">Անցնել թեստ</a>
                </Panel>
                <Panel header="Գլուխ 3" key="3">
                    <p>{text}</p>
                    <a href="/test">Անցնել թեստ</a>
                </Panel>
                <Panel header="Գլուխ 4" key="4">
                    <p>{text}</p>
                    <a href="/test">Անցնել թեստ</a>
                </Panel>
                <Panel header="Գլուխ 5" key="5">
                    <p>{text}</p>
                    <a href="/test">Անցնել թեստ</a>
                </Panel>
                <Panel header="Գլուխ 6" key="6">
                    <p>{text}</p>
                    <a href="/test">Անցնել թեստ</a>
                </Panel>
            </Collapse>
        </Container>
    );
}

export default Lesson;