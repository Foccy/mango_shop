import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import{Link} from 'react-router-dom'
import axios from "axios";
import "./ProductPage.css";
const ProductPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	useEffect(() => {
		let url = `http://localhost:8080/products/${id}`;
		axios
			.get(url)
			.then((result) => {
				setProduct(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	if (product == null) {
		return <h1>상품정보를 받고 있습니다...</h1>;
	}
	
	return (
		<div>
			<h1>{product.name}상품상세페이지</h1>
    <h2>{id}번째 상품 정보 입니다</h2>
    <img src={`http://localhost:8080//products/${product.imageUrl}`} alt=""/>
    <Link to={`/`}>
      <button>홈으로 돌아가기</button>
    </Link>
			<div id="image-box">
				<img src={`/${product.imageUrl}`} alt={product.name} />
			</div>
			<div id="profile-box">
				<img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
			</div>
      <div className="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createAt">2023.03.10</div>
        <div id="description">{product.desc}</div>
      </div>
		</div>
	);
};
export default ProductPage;
