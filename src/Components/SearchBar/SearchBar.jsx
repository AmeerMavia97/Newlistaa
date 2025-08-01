import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ComboboxSelector from "../ComboboxSelector/ComboboxSelector";
import { Search } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilters } from "../../Reducers/filterSlice/filterSlice";

const ListingType = [
  { label: "Select Your Listing Type", name: "All Listing" },
  { label: "All Listing", name: "All Listing" },
  { label: "Standard Listing", name: "Standard Listing" },
  { label: "Feature Listing", name: "Feature Listing" },
  { label: "Off Market Listing", name: "Off Market Listing" },
];

const propertyType = [
  { label: "Apartments / Multifamily", name: "Select Your Property" },
  { label: "Apartments / Multifamily", name: "Apartments / Multifamily" },
  { label: "Automotive Property", name: "Automotive Property" },
  { label: "Church", name: "Church" },
  { label: "Gas Station", name: "Gas Station" },
  { label: "Healthcare Facility", name: "Healthcare Facility" },
  { label: "Hospitality", name: "Hospitality" },
  { label: "Industrial Building", name: "Industrial Building" },
  { label: "Industrial Park", name: "Industrial Park" },
  { label: "Mixed Use Property", name: "Mixed Use Property" },
  { label: "Office Building", name: "Office Building" },
  { label: "Recreation Center", name: "Recreation Center" },
  { label: "Retail Center", name: "Retail Center" },
  { label: "School Building", name: "School Building" },
  { label: "Self-Storage Facility", name: "Self-Storage Facility" },
  { label: "Senior Living Facility", name: "Senior Living Facility" },
  { label: "Shopping Center", name: "Shopping Center" },
  {
    label: "Single-Tenant Retail Building",
    name: "Single-Tenant Retail Building",
  },
  { label: "Strip Center", name: "Strip Center" },
  { label: "Vacant Land", name: "Vacant Land" },
  { label: "Warehouse", name: "Warehouse" },
  { label: "Other", name: "Other" },
];

const statesArray = [
  { id: 57, name: "Any", code: "any" },
  { id: 1, name: "Alabama", code: "AL" },
  { id: 2, name: "Alaska", code: "AK" },
  { id: 3, name: "Arizona", code: "AZ" },
  { id: 4, name: "Arkansas", code: "AR" },
  { id: 5, name: "California", code: "CA" },
  { id: 6, name: "Colorado", code: "CO" },
  { id: 7, name: "Connecticut", code: "CT" },
  { id: 8, name: "Delaware", code: "DE" },
  { id: 9, name: "Florida", code: "FL" },
  { id: 10, name: "Georgia", code: "GA" },
  { id: 11, name: "Hawaii", code: "HI" },
  { id: 12, name: "Idaho", code: "ID" },
  { id: 13, name: "Illinois", code: "IL" },
  { id: 14, name: "Indiana", code: "IN" },
  { id: 15, name: "Iowa", code: "IA" },
  { id: 16, name: "Kansas", code: "KS" },
  { id: 17, name: "Kentucky", code: "KY" },
  { id: 18, name: "Louisiana", code: "LA" },
  { id: 19, name: "Maine", code: "ME" },
  { id: 20, name: "Maryland", code: "MD" },
  { id: 21, name: "Massachusetts", code: "MA" },
  { id: 22, name: "Michigan", code: "MI" },
  { id: 23, name: "Minnesota", code: "MN" },
  { id: 24, name: "Mississippi", code: "MS" },
  { id: 25, name: "Missouri", code: "MO" },
  { id: 26, name: "Montana", code: "MT" },
  { id: 27, name: "Nebraska", code: "NE" },
  { id: 28, name: "Nevada", code: "NV" },
  { id: 29, name: "New Hampshire", code: "NH" },
  { id: 30, name: "New Jersey", code: "NJ" },
  { id: 31, name: "New Mexico", code: "NM" },
  { id: 32, name: "New York", code: "NY" },
  { id: 33, name: "North Carolina", code: "NC" },
  { id: 34, name: "North Dakota", code: "ND" },
  { id: 35, name: "Ohio", code: "OH" },
  { id: 36, name: "Oklahoma", code: "OK" },
  { id: 37, name: "Oregon", code: "OR" },
  { id: 38, name: "Pennsylvania", code: "PA" },
  { id: 39, name: "Rhode Island", code: "RI" },
  { id: 40, name: "South Carolina", code: "SC" },
  { id: 41, name: "South Dakota", code: "SD" },
  { id: 42, name: "Tennessee", code: "TN" },
  { id: 43, name: "Texas", code: "TX" },
  { id: 44, name: "Utah", code: "UT" },
  { id: 45, name: "Vermont", code: "VT" },
  { id: 46, name: "Virginia", code: "VA" },
  { id: 47, name: "Washington", code: "WA" }, // U.S. State
  { id: 48, name: "Washington D.C.", code: "DC" }, // Federal District
  { id: 49, name: "West Virginia", code: "WV" },
  { id: 50, name: "Wisconsin", code: "WI" },
  { id: 51, name: "Wyoming", code: "WY" },
  { id: 52, name: "Puerto Rico", code: "PR" },
  { id: 53, name: "U.S. Virgin Islands", code: "VI" },
  { id: 54, name: "Guam", code: "GU" },
  { id: 55, name: "American Samoa", code: "AS" },
  { id: 56, name: "Northern Mariana Islands", code: "MP" },
];

const SearchBar = ({ handleFilterChange }) => {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const listingType = watch("listingType");
  const propertyType = watch("propertyType");
  const priceRange = watch("priceRange");
  const state = watch("state");
  const city = watch("city");

  const onSubmit = () => {
    const data = {
      listingType: getValues("listingType"),
      propertyType: getValues("propertyType"),
      state: selectedState,
      city: selectedCity,
      priceRange: getValues("priceRange"),
    };
    console.log(data);
    // handleFilterChange(data);
    dispatch(setFilters(data));
    navigate("/properties");
  };

  useEffect(() => {
    if (location.pathname === "/properties") {
      const data = {
        listingType: getValues("listingType"),
        propertyType: getValues("propertyType"),
        state: selectedState,
        city: selectedCity,
        priceRange: getValues("priceRange"),
      };

      dispatch(setFilters(data));
      handleFilterChange(data);
    }
  }, [
    getValues("listingType"),
    getValues("propertyType"),
    selectedState,
    selectedCity,
    getValues("priceRange"),
  ]);

  console.log(location.pathname);

  const StateSelectionHandler = (value) => {
    if (!value || !value.name) return;

    // Set the state value correctly
    setValue("state", value.name, { shouldValidate: true });

    // Save selected state name
    setSelectedState(value.name);
    setSelectedCity("");
    setCities([]);

    // Load cities using state short code
    const stateShortNames = value.code;
    if (value.code !== "any") {
      axios
        .get(`/states/${stateShortNames}.json`)
        .then((res) => {
          const cityList = res.data;
          setCities(cityList);
        })
        .catch((error) => {
          console.error("Failed to load cities:", error);
          setCities([]);
        });
    }
  };

  const CitySelectionHandler = (value) => {
    setSelectedCity(value.name);
    setValue("city", value.name);
  };

  const cityOptions = cities.map((city, index) => ({
    id: index + 1,
    name: city,
  }));

  return (
    <div className="sm:mb-8 sm:flex sm:justify-center mt-8">
      <div className="relative w-[85%] justify-between md:w-[35%] lg:w-[94%] xl:w-[84%] flex rounded-full py-3 px-5 lg:px-6.5 sm:py-3.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-textColor lg:justify-center items-center">
        {/* Listing Type */}
        <div className="w-[45%] lg:w-[13%] xl:w-[15%] px-4 py-2 lg:border-r-[1px] border-solid border-Paracolor">
          <select
            {...register("listingType")}
            className="text-[16px] font-Inter text-black font-[500] focus:outline-none border-none focus:ring-0 w-full"
            onChange={(e) => {
              setIsFilterOpen(
                e.target.value !== "Select" && e.target.value !== ""
              );
              setValue("listingType", e.target.value);
            }}
          >
            <option value="Select">Select</option>
            <option value="For Sale">For Sale</option>
            <option value="For Lease">For Lease</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="hidden lg:flex lg:w-[20%] px-8 py-1 md:border-r-[1px] border-solid border-Paracolor flex-col">
          <h1 className="text-[14px] font-semibold font-Inter text-black">
            Listing Type
          </h1>
          <select
            {...register("propertyType")}
            className="text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
          >
            {ListingType.map((item, index) => (
              <option key={index} value={item.name}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* State Selector */}
        <div className="hidden lg:flex lg:w-[190px] whitespace-nowrap text-ellipsis px-8 py-1 lg:border-r-[1px] border-solid border-Paracolor flex-col">
          <h1 className="text-[14px] font-Inter text-black font-[600]">
            State
          </h1>
          <ComboboxSelector
            options={statesArray}
            onSelect={StateSelectionHandler}
            placeholder="Select Your State"
          />
        </div>

        {/* Mobile Filter */}
        <div className="w-[40%] flex justify-center items-center lg:hidden md:w-[10%] sm:w-[25%]">
          {isFilterOpen && (
            <MobileMenu
              register={register}
              setIsFilterOpen={setIsFilterOpen}
              isFilterOpen={isFilterOpen}
              listingType={listingType}
              handleFilterChange={handleFilterChange}
            />
          )}
        </div>

        {/* City Selector */}
        <div className="hidden lg:w-[20%] xl:w-[22%] px-8 py-1 border-r-[1px] border-solid border-Paracolor lg:flex flex-col">
          <h1 className="text-[14px] font-Inter text-black font-[600]">City</h1>
          <ComboboxSelector
            options={cityOptions}
            onSelect={CitySelectionHandler}
            value={{ name: selectedCity }}
            placeholder="Select Your City"
            disabled={cityOptions.length === 0}
          />
        </div>

        {/* Price Range */}
        <div className="hidden lg:w-[23%] xl:w-[20%] px-8 py-1 lg:flex flex-col">
          <h1 className="text-[14px] font-Inter text-black font-[600]">
            Price Range
          </h1>
          <select
            {...register("priceRange")}
            className="text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
          >
            <option value="">Choose Price Range</option>
            <option value="Any">Any</option>
            <option value="Under $250K">Under $250K</option>
            <option value="$250K – $500K">$250K – $500K</option>
            <option value="$500K – $1M">$500K – $1M</option>
            <option value="$1M – $2.5M">$1M – $2.5M</option>
            <option value="$2.5M – $5M">$2.5M – $5M</option>
            <option value="$5M – $10M">$5M – $10M</option>
            <option value="$10M – $25M">$10M – $25M</option>
            <option value="$25M – $50M">$25M – $50M</option>
            <option value="Over $50M">Over $50M</option>
          </select>
        </div>

        {/* Search Button */}
        <div>
          {location.pathname !== "/properties" && (
            <button
              type="button"
              className="hover-btn hover-btn-purple text-white px-2 py-2 rounded-full text-[14px] cursor-pointer"
              onClick={onSubmit}
            >
              <span>
                <Search />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
