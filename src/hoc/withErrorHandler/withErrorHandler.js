import React, {Component} from 'react';
import Auxiliary from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
        return class extends React.Component {
            state = {
                error: null,
            };

            componentWillMount() {
                this.reqInteceptor = axios.interceptors.request.use(req => {
                    this.setState({error: null});
                    return req;
                });
                this.reqInteceptor = axios.interceptors.response.use(res => res, error => {
                    this.setState({error: error});
                });
            }

            componentWillUnmount() {
                axios.interceptors.request.eject(this.reqInteceptor);
                axios.interceptors.response.eject(this.reqInteceptor);
            }

            errorConfirmedHandler = () => {
                this.setState({error: null});
            };

            render() {
                return (
                    <Auxiliary>
                        <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent {...this.props}/>
                    </Auxiliary>
                );
            }
        }
    }
;

export default withErrorHandler;