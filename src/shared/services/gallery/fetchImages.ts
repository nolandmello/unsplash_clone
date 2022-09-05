export interface Image {
    id:                       string;
    created_at:               Date;
    updated_at:               Date;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    downloads:                number;
    likes:                    number;
    liked_by_user:            boolean;
    description:              string;
    exif:                     {
        make:          string;
        model:         string;
        exposure_time: string;
        aperture:      string;
        focal_length:  string;
        iso:           number;
    };
    location:                 {
        name:     string;
        city:     string;
        country:  string;
        position: {
            latitude:  number;
            longitude: number;
        };
    };
    current_user_collections: {
        id:                number;
        title:             string;
        published_at:      Date;
        last_collected_at: Date;
        updated_at:        Date;
        cover_photo:       null;
        user:              null;
    }[];
    urls:                     {
        raw:     string;
        full:    string;
        regular: string;
        small:   string;
        thumb:   string;
    };
    links:                    {
        self:              string;
        html:              string;
        download:          string;
        download_location: string;
    };
    user:                     {
        id:                 string;
        updated_at:         Date;
        username:           string;
        name:               string;
        portfolio_url:      string;
        bio:                string;
        location:           string;
        total_likes:        number;
        total_photos:       number;
        total_collections:  number;
        instagram_username: string;
        twitter_username:   string;
        links:              {
            self:      string;
            html:      string;
            photos:    string;
            likes:     string; 
            portfolio: string;
        };
    };
}
export type Images = Array<Image>;

