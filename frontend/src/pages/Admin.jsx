import { useState } from "react";

export default function Admin() {
  const [pendingReviews, setPendingReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingClick, setLoadingClick] = useState(false);
  return (
    <div className="h-screen pt-[90px] bg-gray-800 p-2 flex justify-center text-white text-5xl">
      <div>This is Admin Page</div>
    </div>
  );
}
