import Category from "../type/Category";

async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await fetch('http://localhost:8080/api/blog/category/get-all');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories: Category[] = await response.json();
    return categories;

  } catch (error) {
    console.error('Error fetching categories: ', error);
    return [];
  }
}

async function createCategory(category: Category): Promise<Category | null> {
  try {
    const response = await fetch('http://localhost:8080/api/blog/category/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const createdCategory: Category = await response.json();
    return createdCategory;

  } catch (error) {
    console.error('Error creating category: ', error);
    return null;
  }
}

async function updateCategory(id: number, category: Category): Promise<Category | null> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/category/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedCategory: Category = await response.json();
    return updatedCategory;

  } catch (error) {
    console.error('Error updating category: ', error);
    return null;
}
}

async function deleteCategory(id: number): Promise<boolean> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/category/delete/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;

  } catch (error) {
    console.error('Error deleting category: ', error);
    return false;
  }
}

export { getAllCategories, createCategory, updateCategory, deleteCategory };