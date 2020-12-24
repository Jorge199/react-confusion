import React, { Component } from 'react';
import moment from 'moment'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(<div></div>);
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const comments_list = comments.map((comment) => {
                return(
                    <div>
                        <label className="mt-3">{comment.comment}</label>
                        <label className="mt-3">
                            -- {comment.author} , {moment(comment.date).format("MMM DD, YYYY")}
                        </label>
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    {comments_list}
                </div>
            );
        } else  {
            return(<div></div>);
        }
        
    }

    render() {
        return(
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;