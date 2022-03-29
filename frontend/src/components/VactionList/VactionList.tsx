import React, { useEffect } from "react";
import "./VactionList.css";
import { useState } from "react";
import { list } from "../../api/category";

interface Props {}

const VactionList = (props: Props) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const loadcategory = async () => {
      const { data } = await list();
      setCategory(data);
    };
    loadcategory();
  }, []);
  return (
    <div className="DIV_1">
      <div className="DIV_2">
        <h2 className="H2_3">Danh mục tiêm chủng</h2>
        <p className="P_4">
          Trung tâm tiêm chủng co-win cung cấp các dịch vụ tiêm chủng phù hợp
          cho mọi lứa tuổi
        </p>
        <div className="DIV_5">
          <div className="DIV_6">
            <ul className="UL_7">
              {category &&
                category.map((categ: any) => {
                  return (
                    <>
                      <li className="LI_8">
                        <a href="" className="A_9">
                         {categ.name}
                        </a>
                        <img src="https://www.cowin.gov.in/assets/images/what's_new_on_cowin.svg" alt="" />
                      </li>
                    </>
                  );
                })}

              {/* <li className="LI_11">
						<a href="" className="A_12">Merge Certificates</a>
						<p className="P_13">
							In case you have multiple certificates of Dose 1 generated from different accounts, you can merge them into the final vaccination certificate.
						</p>
					</li>
					<li className="LI_14">
						<a href="" className="A_15">Add Passport</a>
						<p className="P_16">
							You can link your passport to your vaccination certificate. By adding a passport to your vaccination certificate you can submit a request and get an international travel certificate.
						</p>
					</li>
					<li className="LI_17">
						<a href="" className="A_18">Report Unknown Member</a>
						<p className="P_19">
							If there are any unknown members are associated with your account, you can remove them from your account by reporting unknown members.
						</p>
					</li>
					<li className="LI_20">
						<a href="" className="A_21">Transfer Member To New Number</a>
						<p className="P_22">
							You can transfer members associated with your existing account to the new mobile number.
						</p>
					</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VactionList;
