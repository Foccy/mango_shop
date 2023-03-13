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
		</div>
	);
}

export default App;