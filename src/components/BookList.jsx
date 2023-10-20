import { useEffect, useState } from "react"
import styled from "styled-components";

const List = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;
        /* flex-direction: column;  */
        list-style: none;
        max-width: 1100px;
    }
    li {
        /* display: flex;
        align-items: center; */
    }
    li div{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        z-index: -1;
        position: absolute;
        width: 200px;
        height: 300px;
    }
    img {
        max-width: 200px;
        z-index: 1;
        height: auto;
    }
    img:hover{
        /* zoom: 1.15; */
        z-index: -20;
        position: static;
        opacity: .15;
    }
`

export const BookList = () => {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const url = 'http://127.0.0.1:8004/book/'
        const get = async () => {
            const data = await fetch(url).then(response => response.json());
            console.log("Data:", data);
            setBookList(data);
        }
        get();
    }, [])
    return (
        <>
            <h1>Fullstack Fiction</h1>
            <List>
                <ul>
                    {bookList?.map((book, index) => {
                        return (
                            <li key={index}>
                                <div>{book.title}<br/>{book.author}</div><img src={book.url} alt="" />
                            </li>
                        )
                    })}
                </ul>
            </List>
        </>
    )
}