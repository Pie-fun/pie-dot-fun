// @generated
/// SpacebarWeek has the service-based incremental week number.
/// 2024/02/19 ~ 2024/02/25 => 1
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpacebarWeek {
    /// week. incremental value.
    #[prost(uint32, tag="1")]
    pub week: u32,
    /// date. [start_date, end_date]
    /// start_date. It's monday
    #[prost(message, optional, tag="2")]
    pub start_date: ::core::option::Option<super::super::super::google::r#type::Date>,
    /// end_date. It's sunday
    #[prost(message, optional, tag="3")]
    pub end_date: ::core::option::Option<super::super::super::google::r#type::Date>,
    // Full Week Based.
    // - The start_date and end_date must both be in the same month.
    // - Week 1 through Week 3 only.
    //    - A week with the first Monday of the month is Full Week Based Week Number 1
    // If the above conditions are not met, the null
    // 
    // <https://www.notion.so/spacebarxyz/Full-Week-Based-11b5c111d14d8043b729c8a5e799e55e?pvs=4>

    /// full_week_based_year
    #[prost(uint32, optional, tag="4")]
    pub full_week_based_year: ::core::option::Option<u32>,
    /// full_week_based_year
    #[prost(uint32, optional, tag="5")]
    pub full_week_based_month: ::core::option::Option<u32>,
    /// full_week_based_week
    #[prost(uint32, optional, tag="6")]
    pub full_week_based_week: ::core::option::Option<u32>,
    /// full_week_based_week_string
    /// Format: {year}-{month}-{week}. Example: 2021-01-W1
    #[prost(string, tag="7")]
    pub full_week_based_week_string: ::prost::alloc::string::String,
    /// full_week_based_month_string
    /// Format: yyyy-MM. Example: 2021-01
    #[prost(string, tag="8")]
    pub full_week_based_month_string: ::prost::alloc::string::String,
}
/// GetCurrentTimeResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetCurrentTimeResponse {
    /// time
    #[prost(message, optional, tag="1")]
    pub time: ::core::option::Option<::prost_types::Timestamp>,
}
/// GetCurrentWeekResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetCurrentWeekResponse {
    /// week
    #[prost(uint32, tag="1")]
    pub week: u32,
}
/// GetSpacebarWeekRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSpacebarWeekRequest {
    /// week
    #[prost(uint32, tag="1")]
    pub week: u32,
}
/// GetSpacebarWeekByDateRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetSpacebarWeekByDateRequest {
    /// date
    /// if null, it's today (UTC)
    #[prost(message, optional, tag="1")]
    pub date: ::core::option::Option<super::super::super::google::r#type::Date>,
}
/// GetCurrentFullWeekBasedWeekResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetCurrentFullWeekBasedWeekResponse {
    /// Format: {year}-{month}-{week}. Example: 2021-01-W1
    #[prost(string, tag="1")]
    pub current_week: ::prost::alloc::string::String,
    /// Format: {year}-{month}-{week}. Example: 2021-01-W1
    #[prost(string, tag="2")]
    pub previous_week: ::prost::alloc::string::String,
}
/// GetFullWeekBasedWeekRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetFullWeekBasedWeekRequest {
    /// base
    #[prost(oneof="get_full_week_based_week_request::Base", tags="1, 2")]
    pub base: ::core::option::Option<get_full_week_based_week_request::Base>,
}
/// Nested message and enum types in `GetFullWeekBasedWeekRequest`.
pub mod get_full_week_based_week_request {
    /// base
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Base {
        /// date
        #[prost(message, tag="1")]
        Date(super::super::super::super::google::r#type::Date),
        /// week
        #[prost(uint32, tag="2")]
        Week(u32),
    }
}
/// GetFullWeekBasedWeekResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetFullWeekBasedWeekResponse {
    /// Format: {year}-{month}-{week}. Example: 2021-01-W1
    #[prost(string, tag="1")]
    pub week: ::prost::alloc::string::String,
}
/// GetCurrentFullWeekBasedMonthResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetCurrentFullWeekBasedMonthResponse {
    /// Format: yyyy-MM. Example: 2021-01
    #[prost(string, tag="1")]
    pub current_month: ::prost::alloc::string::String,
    /// Format: yyyy-MM. Example: 2021-01
    #[prost(string, tag="2")]
    pub previous_month: ::prost::alloc::string::String,
}
include!("blast.v1.time.tonic.rs");
// @@protoc_insertion_point(module)