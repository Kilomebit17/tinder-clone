import React from 'react'
import p from './People.module.css'
const People = (props) => {
    return (
        <div className={p.content}>
            <img src={props.photoUrl} alt="peoples pictures" className={p.img}/>
            <div className={p.textBlock}>
                <div className={p.title}>{props.title}</div>
                <button className={p.send}>Написать сообщение</button>
                <div>
                    {
                        props.followStatus ?
                            <button onClick={() => {props.unFollow(props.id)}} className={p.follow}>Вы подписаны</button>
                            :
                            <button onClick={() => {props.follow(props.id)}} className={p.follow}>Подписаться</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default People;