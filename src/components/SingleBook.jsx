import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };

  handleBookClick = () => {
    this.setState({ selectedBook: !this.state.selectedBook });
  };
  render() {
    const { book } = this.props;
    const bookBgColor = this.state.selectedBook ? "selected-book" : "";
    return (
      <Col md={3} className="mb-3">
        <Card className={bookBgColor} onClick={this.handleBookClick}>
          <Card.Img className="object-fit-contain" src={book.img} height={400} />
          <Card.Body>
            <Card.Title className="text-truncate">{book.title}</Card.Title>
            <Card.Text>{`Price: ${book.price}€`}</Card.Text>
            <Button variant="primary">Buy Book</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
