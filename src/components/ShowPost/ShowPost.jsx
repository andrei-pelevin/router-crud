import moment from 'moment';
import { NavLink } from 'react-router-dom';

const ShowPost = (props) => {
    const onDel = (i) => {
        fetch(`http://localhost:7777/posts/${i}/`, {
            method: 'DELETE',
            headers: {
            },
        });
    }

    return (
        <div className="card col-4 m-5">
            <div className='d-flex justify-content-between'>
                <div className="m-3 d-flex" >
                    <img alt='' style={{ borderRadius: '50%', height: '50px', width: '50px' }} src='https://ae01.alicdn.com/kf/HTB1VaQUdFHM8KJjSZJiq6zx3FXak/-.jpg' />
                    <div className='col-1'></div>
                    <b>Ракета Поперечного</b>
                </div>

                <div className="m-3">
                    {moment(props.location.state.data.created).format('HH:mm DD.MM.YYYY')}
                </div>
            </div>
            <hr />
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{props.location.state.data.content}</p>
                </blockquote>
            </div>
            <hr />
            <div className='container d-flex justify-content-end'>
                <NavLink to={{
                    pathname: `/edit`,
                    state: { data: props.location.state }
                }}>
                    <button
                        className="btn btn-primary m-1">Изменить
                    </button>
                </NavLink>

                <NavLink to='/'>
                    <button
                        className="btn btn-danger m-1"
                        onClick={() => onDel(props.match.params.id)}>Удалить
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
export default ShowPost;
