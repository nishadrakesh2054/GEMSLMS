import {
  FaPlusCircle,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { FaEye, FaBookOpen } from "react-icons/fa6";
import { useState } from "react";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-3-16-148410-0",
      category: "Classic Literature",
      publishedYear: 1925,
      publisher: "Scribner",
      pages: 180,
      status: "Available",
      dueDate: "",
      borrower: "",
      availability: "2/3",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      isbn: "978-0-452-28423-4",
      category: "Dystopian",
      publishedYear: 1949,
      publisher: "Secker & Warburg",
      pages: 328,
      status: "Checked Out",
      dueDate: "2023-06-15",
      borrower: "John Smith",
      availability: "1/5",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-06-112008-4",
      category: "Southern Gothic",
      publishedYear: 1960,
      publisher: "J. B. Lippincott & Co.",
      pages: 281,
      status: "Available",
      dueDate: "",
      borrower: "",
      availability: "4/6",
    },
    {
      id: 4,
      title: "Moby Dick",
      author: "Herman Melville",
      isbn: "978-1-59308-018-7",
      category: "Adventure",
      publishedYear: 1851,
      publisher: "Harper & Brothers",
      pages: 635,
      status: "Available",
      dueDate: "",
      borrower: "",
      availability: "3/9",
    },
    {
      id: 5,
      title: "The Lean Startup",
      author: "Eric Ries",
      isbn: "978-0-307-88789-4",
      category: "Business",
      publishedYear: 2011,
      publisher: "Crown Business",
      pages: 336,
      status: "Reserved",
      dueDate: "",
      borrower: "Sarah Johnson",
      availability: "6/8",
    },
  ];

  const handleAddBook = () => {
    console.log("Adding a new book");
    // Would typically open a modal or navigate to a form
  };

  const handleEditBook = (id: number) => {
    console.log(`Editing book with ID: ${id}`);
    // Would typically open a modal or navigate to a form
  };

  const handleViewBook = (id: number) => {
    console.log(`Viewing book with ID: ${id}`);
    // Would typically open a modal or navigate to a detail page
  };

  const handleDeleteBook = (id: number) => {
    console.log(`Deleting book with ID: ${id}`);
    // Would typically show a confirmation dialog before deleting
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || book.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm">

        {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-6">
            <FaBookOpen className="text-[#0079C0]" /> Book Management
          </h2>
          <p className="text-gray-600 dark:text-gray-300 ps-12">
            Manage your library collection
          </p>
        </div>
        <button
          onClick={handleAddBook}
          className="flex items-center text-white bg-[#0079C0] hover:bg-yellow-700 px-4 py-2 rounded-md transition-colors duration-200"
        >
          <FaPlusCircle className="mr-2" /> Add New Book
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-[#0079C0]" />
          </div>
          <input
            type="text"
            placeholder="Search by title, author or ISBN..."
            className="pl-10 pr-4 py-2 w-1/2 border border-[#0079C0] dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative w-full md:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaFilter className="text-[#0079C0]" />
          </div>
          <select
            className="pl-10 pr-4 py-2 w-full border  border-[#0079C0] dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white appearance-none"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="Available">Available</option>
            <option value="Checked Out">Checked Out</option>
            <option value="Reserved">Reserved</option>
            <option value="Lost">Lost</option>
          </select>
        </div>
      </div>

 

      {/* Table displaying books */}
      <div className="overflow-x-auto mt-6 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Author
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                ISBN
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Borrower
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
               Availability
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr
                  key={book.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="py-4 px-6 text-gray-800 dark:text-white ">
                    {book.title}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {book.author}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {book.category}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400 font-mono">
                    {book.isbn}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        book.status === "Available"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : book.status === "Checked Out"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : book.status === "Reserved"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {book.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-gray-600 dark:text-gray-400">
                    {book.borrower || "-"}
                  </td>

                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {book.availability || "-"}
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button
                      onClick={() => handleViewBook(book.id)}
                      className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 rounded-full hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEditBook(book.id)}
                      className="p-2 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300 rounded-full hover:bg-yellow-50 dark:hover:bg-gray-600 transition-colors"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 rounded-full hover:bg-red-50 dark:hover:bg-gray-600 transition-colors"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={12}
                  className="py-20 text-center text-red-700 dark:text-gray-400"                >
                  No books found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination would go here */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">{filteredBooks.length}</span> of{" "}
          <span className="font-medium">{books.length}</span> books
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-[#0079C0] rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 disabled:opacity-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-[#0079C0] rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
