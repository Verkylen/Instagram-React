import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo() {
    return (
        <div class="Container">
            <div class="Publications">
                <Stories/>
                <Posts/>
            </div>

            <SideBar/>
        </div>
    );
}