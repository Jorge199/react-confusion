import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {
        if (comments != null) {
            const comments_list = comments.map((comment) => {
                return(
                    <div>
                        <label className="mt-3">{comment.comment}</label>
                        <label className="mt-3">
                            -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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

    const  DishDetail = (props) => {
        if (props.dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(<div></div>);
        }
    }

export default DishDetail;