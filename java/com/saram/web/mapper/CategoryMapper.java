package com.saram.web.mapper;

import java.util.List;

import com.saram.web.domain.CategoryDTO;

import org.springframework.stereotype.Repository;

/**
 * CategoryMapper
 */
@Repository
public interface CategoryMapper {
    public void insertCategory(CategoryDTO category);
    public List<CategoryDTO> selectCategories();
    public List<CategoryDTO> selectCategoriesByOption(CategoryDTO option);
    public CategoryDTO selectCategoryByCategoryId(String categoryId);
    public void updateCategory(CategoryDTO category);
    public void deleteCategory(CategoryDTO category);
    
}