DROP TRIGGER IF EXISTS monthly_disbursement_elt_transform_county_bri ON monthly_disbursement_elt;

CREATE TRIGGER monthly_disbursement_elt_transform_county_bri
    BEFORE INSERT
    ON monthly_disbursement_elt
    FOR EACH ROW
    EXECUTE FUNCTION transform_county_disbursement();