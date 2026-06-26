function ReviewList({ reviews }) {

  return (

    <div style={{ marginTop: "50px" }}>

      <h2>Customer Reviews</h2>

      {reviews.length === 0 ? (

        <p>No reviews yet.</p>

      ) : (

        reviews.map((review) => (

          <div
            key={review.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px",
            }}
          >

            <h4>{review.user}</h4>

            <p>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>

            <p>{review.comment}</p>

            <small>
              {new Date(
                review.created_at
              ).toLocaleDateString()}
            </small>

          </div>

        ))

      )}

    </div>

  );

}

export default ReviewList;