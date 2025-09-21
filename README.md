# Juspay Dashboard Assignment

This project is a **dashboard UI** built using **Next.js (App Router)** and **Tailwind CSS** by **Amanulla!**. It includes a paginated table of orders with search and filter functionality.

## Features

- **Header**
  - Breadcrumb navigation (`Dashboards / Default`)
  - Search bar
  - Action icons (Refresh, Notifications, etc.)
  - Theme toggle (optional)

- **Search and Filter**
  - Search input with debounce
  - Action buttons for Add, Filter, Sort

- **Orders Table**
  - Displays orders with columns:
    - Order ID
    - User (with avatar)
    - Project
    - Address
    - Time
    - Status (color-coded)
  - Filters rows based on search input
  - Paginated display (10 items per page)

- **Pagination**
  - Navigate between table pages
  - Highlights active page
  - Disables prev/next at boundaries

## Technologies Used

- **Next.js 13** (App Router)
- **React**
- **Tailwind CSS**
- **Heroicons**
- **Debounce utility** for search input

## Component Structure

