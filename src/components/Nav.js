import { h } from 'preact';
/** @jsx h */

export default function Nav() {
    return <nav>
        <ul>
            <li>
                menu
                <ul>
                    <li><a href="/"><i>Home</i></a></li>
                    <li><a href="/p2">Page 2</a></li>
                </ul>
            </li>
        </ul>
    </nav>;
}
