import { h, render } from 'preact';
/** @jsx h */

import Nav from '../components/Nav';

export default function Home() {
    return <div>
        <header>
            <Nav />
            <h1>Hello, world!</h1>
        </header>
        <main>
            <section>
                <aside>
                    <h3>Card heading</h3>
                    <p>Card content*</p>
                    <p><small>*with small content</small></p>
                </aside>
                <aside>
                    <h3>Card heading</h3>
                    <p>Card content <sup>with notification</sup></p>
                </aside>
                <aside>
                    <h3>Card heading</h3>
                    <p>Card content</p>
                </aside>
            </section>
        </main>
    </div>;
};
