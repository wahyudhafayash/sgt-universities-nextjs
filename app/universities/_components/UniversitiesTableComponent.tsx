"use client";
import { Table, Input, Spin } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";

interface University {
  name: string;
  country: string;
}

const MainPage = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filter, setFilter] = useState({ country: "", name: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "http://universities.hipolabs.com/search?country=indonesia&name=universitas"
    )
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [filter]);

  const filteredData = universities.filter(
    (univ) =>
      (filter.country
        ? univ.country.toLowerCase().includes(filter.country.toLowerCase())
        : true) &&
      (filter.name
        ? univ.name.toLowerCase().includes(filter.name.toLowerCase())
        : true)
  );

  return (
    <section className="w-screen min-h-screen">
      <div className="border-2 rounded-xl shadow-xl p-12 m-32 mt-10 ">
        <h1 className="font-bold text-3xl mb-6">Universities</h1>
        <div className="flex mb-6 gap-10">
          <Input
            placeholder="Search Country"
            onChange={(e) => setFilter({ ...filter, country: e.target.value })}
          />
          <Input
            placeholder="Search University Name"
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          />
        </div>

        {loading ? (
          <Spin className="flex justify-center my-20" size="large" />
        ) : (
          <Table dataSource={filteredData} rowKey="name">
            <Column title="Name" dataIndex="name" />
            <Column title="Country" dataIndex="country" />
          </Table>
        )}
      </div>
    </section>
  );
};

export default MainPage;
