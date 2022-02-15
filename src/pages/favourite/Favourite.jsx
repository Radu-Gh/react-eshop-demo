import React from 'react';
import Layout from '../../components/layout/Layout';
import { connect } from 'react-redux';
import { removeFromFavourite } from '../../redux/favourite/favouriteActions';
import { Link } from 'react-router-dom';
import './Favourite.css';
import { ReactComponent as Close} from '../../assets/icons/close.svg';

function Favourite(props) {
    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.price;
        }, 0)
    }

    return(
        <Layout>
            <div className="favourite-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price } { product.currency }</p>
                                        <div onClick={() => props.removeFromFavourite({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                            </div>
                            <div className="w-25">
                                <p className="my-4 text-center">
                                    { totalSum(props.products) } { props.products[0].currency }
                                </p>
                            </div>
                        </div>
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favourite.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavourite: (payload) => dispatch(removeFromFavourite(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);