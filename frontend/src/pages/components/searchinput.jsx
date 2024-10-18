import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';

const SearchInput = () => {
  const [ search, setSearch ] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      alert("Search query must be at least 3 characters long");
      return;
    }

    const conversation = conversations.find((conversation) => conversation.username.toLowerCase().includes(search.toLowerCase()));

    console.log(conversation);
    if (conversation) {
      setSelectedConversation(conversation);
    } else {
      alert("No user found");
    }
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-3 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;

