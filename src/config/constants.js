// export const API_URL = "https://port-0-mango-sever-6g2llfc5dt1p.sel3.cloudtype.app";
export const API_URL = process.env.NODE_ENV === "production" ? "https://port-0-mango-sever-6g2llfc5dt1p.sel3.cloudtype.app" : "http://localhost:8080";
