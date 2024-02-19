import React, {useState, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import { listStrategies } from "../utils/api";

//TODO Add routing to this component in routing file. Path should be /strategies/search