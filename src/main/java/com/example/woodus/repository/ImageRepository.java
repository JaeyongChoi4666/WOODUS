package com.example.woodus.repository;
import com.example.woodus.model.Image;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Optional;

@Repository
public class ImageRepository {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public ImageRepository(DataSource dataSource){
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public Long addImage(Image image){
        String sql = "INSERT INTO image(name, type, pic_byte) VALUES (:name, :type, :picByte)";
        SqlParameterSource parameter = new MapSqlParameterSource("name", image.getName())
                .addValue("type", image.getType())
                .addValue("picByte", image.getPic_byte());

        KeyHolder keyHolder = new GeneratedKeyHolder();
        namedParameterJdbcTemplate.update(sql, parameter, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int setThumbnailId(Long thumbnail_id, Long course_id){
        String sql = "UPDATE course SET thumbnail_id = (:thumbnail_id) where id = (:course_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "thumbnail_id", thumbnail_id)
                .addValue("course_id", course_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setPosterId(Long poster_id, Long course_id){
        String sql = "UPDATE course SET poster_id = (:poster_id) where id = (:course_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "poster_id", poster_id)
                .addValue("course_id", course_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public Optional<Image> findById(Long id){
        String sql = "SELECT id, name, type, pic_byte FROM image WHERE id = :id";
        SqlParameterSource parameter = new MapSqlParameterSource("id", id);

        try {
            Image image = namedParameterJdbcTemplate.queryForObject(sql, parameter, BeanPropertyRowMapper.newInstance(Image.class));
            assert image != null;
            return Optional.of(image);
        }catch (Exception e){
            return Optional.empty();
        }
    }


}
