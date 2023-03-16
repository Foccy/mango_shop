import {Routes,Route,Link, useNavigate} from "react-router-dom"
import MainPage from "./components/MainPage"
import { Button } from "antd";
import "antd/dist/reset.css";
import { UploadOutlined} from "@ant-design/icons";
import ProductPage from "./components/ProductPage"
import UploadPage from "./components/UploadPage"
function App() {
	let navigate=useNavigate()
	return (
		<div>
			<div id="header">
				<div id="header-area">
					<Link to="/"></Link>
					<Button icon={<UploadOutlined />}size="large" onClick={()=>{navigate('/UploadPage')}}>상품 업로드</Button>
					<Link><img src="/images/icons/logo.png" alt="" /></Link>
				</div>
			</div>

			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/ProductPage/:id" element={<ProductPage />}></Route>
				<Route path="/UploadPage" element={<UploadPage />}></Route>
			</Routes>
			<div id="footer">
				<a href="#">회사소개</a>
				<a href="#">이용약관</a>
				<a href="#">통신판매업신고번호:123-1234</a>
				<a href="#">사업자등록번호:456-56-78951</a>
				<a href="#">고객센터:456-78951</a>
			</div>
		</div>
	);
}

export default App;