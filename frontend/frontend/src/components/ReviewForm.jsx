import { useState } from "react";
import { createReview } from "../services/reviewService";

function ReviewForm({ slug, onReviewAdded }) {

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createReview(slug, {
        rating,
        comment,
      });

      alert("Review submitted successfully!");

      setRating(5);
      setComment("");

      onReviewAdded();

    } catch (error) {

      console.error(error);

      if (error.response?.status === 401) {

        alert("Please login first.");

      } else {

        alert("Failed to submit review.");

      }

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "40px",
      }}
    >

      <h2>Write a Review</h2>

      <select
        value={rating}
        onChange={(e) =>
          setRating(Number(e.target.value))
        }
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "200px",
        }}
      >

        <option value={5}>★★★★★</option>
        <option value={4}>★★★★☆</option>
        <option value={3}>★★★☆☆</option>
        <option value={2}>★★☆☆☆</option>
        <option value={1}>★☆☆☆☆</option>

      </select>

      <textarea
        rows="5"
        placeholder="Write your review..."
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#4f46e5",
          color: "white",
          padding: "12px 30px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Submit Review
      </button>

    </form>

  );

}

export default ReviewForm;