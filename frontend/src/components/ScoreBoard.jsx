import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ScoreBoard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="flex justify-center p-3">
        {/* Here you will find your points totals */}
      </div>
      <Table>
        <TableCaption>Current player standings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Week 1</TableHead>
            <TableHead>Week 2</TableHead>
            <TableHead>Week 3</TableHead>
            <TableHead>Week 4</TableHead>
            <TableHead>Week 5</TableHead>
            <TableHead>Week 6</TableHead>
            <TableHead>Week 7</TableHead>
            <TableHead>Week 8</TableHead>
            <TableHead className="text-right">Total Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{userInfo.username}</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">25</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ScoreBoard;
