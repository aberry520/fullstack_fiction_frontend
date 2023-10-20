import { useEffect, useState } from "react"
import styled from "styled-components";

const List = styled.div`
    .shelf{
        background-color: burlywood;
        height: 15px;
        position: absolute;
        z-index: -30;
        top: 32rem;
        left: 2em;
        right: 2em;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;
        list-style: none;
        max-width: 1100px;
        row-gap: 15px;
        column-gap: 20px;
        padding: 0;
    }
    li {
        z-index: 10;
    }
    li div{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        z-index: -1;
        position: absolute;
        width: 200px;
        height: 30%;
    }
    img {
        max-width: 200px;
        z-index: 1;
        height: auto;
    }
    img:hover{
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
                    <div className="shelf"></div>
                    <ul>
                        {bookList?.map((book, index) => {
                            return (
                                <li key={index}>
                                    <div>{book.title}<br />{book.author}</div><img src={book.url} alt="" />
                                </li>
                            )
                        })}
                    </ul>
                
            </List>
        </>
    )
}