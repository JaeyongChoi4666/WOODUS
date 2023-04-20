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

    public int setThumbnailIdinContribution(Long thumbnail_id, Long contribution_id){
        String sql = "UPDATE contribution SET thumbnail_id = (:thumbnail_id) where id = (:contribution_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "thumbnail_id", thumbnail_id)
                .addValue("contribution_id", contribution_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setContents1IdinContribution(Long contents1_id, Long contribution_id){
        String sql = "UPDATE contribution SET contents1_id = (:contents1_id) where id = (:contribution_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents1_id", contents1_id)
                .addValue("contribution_id", contribution_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setContents2IdinContribution(Long contents2_id, Long contribution_id){
        String sql = "UPDATE contribution SET contents2_id = (:contents2_id) where id = (:contribution_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents2_id", contents2_id)
                .addValue("contribution_id", contribution_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setContents3IdinContribution(Long contents3_id, Long contribution_id){
        String sql = "UPDATE contribution SET contents3_id = (:contents3_id) where id = (:contribution_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents3_id", contents3_id)
                .addValue("contribution_id", contribution_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setContents4IdinContribution(Long contents4_id, Long contribution_id){
        String sql = "UPDATE contribution SET contents4_id = (:contents4_id) where id = (:contribution_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents4_id", contents4_id)
                .addValue("contribution_id", contribution_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setContents5IdinContribution(Long contents5_id, Long contribution_id){
        String sql = "UPDATE contribution SET contents5_id = (:contents5_id) where id = (:contribution_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents5_id", contents5_id)
                .addValue("contribution_id", contribution_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setBeforeIdinRepair(Long before_id, Long repair_id){
        String sql = "UPDATE repair SET before_id = (:before_id) where id = (:repair_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "before_id", before_id)
                .addValue("repair_id", repair_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setAfterIdinRepair(Long after_id, Long repair_id){
        String sql = "UPDATE repair SET after_id = (:after_id) where id = (:repair_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "after_id", after_id)
                .addValue("repair_id", repair_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }

    public int setContent1IdinActivity(Long contents1_id, Long activity_id) {
        String sql = "UPDATE activity SET contents1_id = (:contents1_id) where id = (:activity_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents1_id", contents1_id)
                .addValue("activity_id", activity_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }
    public int setContent2IdinActivity(Long contents2_id, Long activity_id) {
        String sql = "UPDATE activity SET contents2_id = (:contents2_id) where id = (:activity_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents2_id", contents2_id)
                .addValue("activity_id", activity_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }
    public int setContent3IdinActivity(Long contents3_id, Long activity_id) {
        String sql = "UPDATE activity SET contents3_id = (:contents3_id) where id = (:activity_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents3_id", contents3_id)
                .addValue("activity_id", activity_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }
    public int setContent4IdinActivity(Long contents4_id, Long activity_id) {
        String sql = "UPDATE activity SET contents4_id = (:contents4_id) where id = (:activity_id)";
        SqlParameterSource parameter = new MapSqlParameterSource(
                "contents4_id", contents4_id)
                .addValue("activity_id", activity_id);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int result = namedParameterJdbcTemplate.update(sql, parameter, keyHolder);

        return result;
    }
}
